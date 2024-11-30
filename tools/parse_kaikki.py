import json
import unicodedata
import random

class Word:
    def __init__(self, data):
        self.pos = data.get("pos", None)
        self.head_templates = data.get("head_templates", [])
        self.forms = data.get("forms", [])
        self.sounds = data.get("sounds", [])
        self.etymology_text = data.get("etymology_text", None)
        self.etymology_templates = data.get("etymology_templates", [])
        self.word_with_diacritics = self.extract_word_with_diacritics()
        self.word_no_diacritics = self.strip_diacritics(self.word_with_diacritics) if self.word_with_diacritics else None
        self.lang = data.get("lang", None)
        self.lang_code = data.get("lang_code", None)
        self.senses = data.get("senses", [])
        self.categories = data.get("categories", [])
        self.definitions = self.extract_definitions()
        
        self.length = 0
        self.okformamlal = False
        if self.word_no_diacritics:
            self.length = len(self.word_no_diacritics)
            self.okformamlal = (self.length == 5 and self.contains_only_letter())

    def extract_word_with_diacritics(self):
        if not self.head_templates:
            return None
        for template in self.head_templates:
            if "args" in template and "1" in template["args"]:
                return template["args"]["1"]
        return None

    def extract_definitions(self):
        if not self.senses:
            return []
        definitions = [sense.get('glosses', []) for sense in self.senses]
        # Flatten the list of definitions
        return [gloss for sublist in definitions for gloss in sublist]

    def contains_only_letter(self):
        syrletters = ['ܐ', 'ܒ', 'ܓ', 'ܕ', 'ܗ', 'ܘ', 'ܙ', 'ܚ', 'ܛ', 'ܝ', 'ܟ',
                      'ܠ', 'ܡ', 'ܢ', 'ܣ', 'ܥ', 'ܦ', 'ܨ', 'ܩ', 'ܪ', 'ܫ', 'ܬ']
        for atoota in self.word_no_diacritics:
            if not atoota in syrletters:
                return False

        return True

    @staticmethod
    def strip_diacritics(text):
        normalized = unicodedata.normalize('NFD', text)
        return ''.join(char for char in normalized if unicodedata.category(char) != 'Mn')

    def __repr__(self):
        return (f"{self.word_with_diacritics} ({self.word_no_diacritics}) [{self.pos}][Mamlal OK: {self.okformamlal}] "
                f"- Definitions: {self.definitions}")

def parse_jsonl_to_objects(jsonl_file_path):
    parsed_objects = []
    with open(jsonl_file_path, 'r', encoding='utf-8') as file:
        for line in file:
            data = json.loads(line.strip())
            parsed_objects.append(Word(data))
    return parsed_objects

def combine_definitions(def_dict):
    definition = ''
    for d in def_dict:
        definition += f'{d}; '
    return definition[:-2]

def strip_non_letters(word):
    word = ''
    syrletters = ['ܐ', 'ܒ', 'ܓ', 'ܕ', 'ܗ', 'ܘ', 'ܙ', 'ܚ', 'ܛ', 'ܝ', 'ܟ',
                  'ܠ', 'ܡ', 'ܢ', 'ܣ', 'ܥ', 'ܦ', 'ܨ', 'ܩ', 'ܪ', 'ܫ', 'ܬ']
    for letter in word:
        if letter in syrletters:
            word += letter
    return word

if __name__ == "__main__":
    jsonl_file_path = "kaikki.org-dictionary-AssyrianNeoAramaic-words.jsonl"
    parsed_entries = parse_jsonl_to_objects(jsonl_file_path)

    words = []
    words_with_vowels = []
    definitions = []
    pos = []
    
    random.shuffle(parsed_entries)
    for entry in parsed_entries:
        if entry.okformamlal:
            if entry.word_no_diacritics in words:
                continue
            
            words.append(entry.word_no_diacritics)
            words_with_vowels.append(entry.word_with_diacritics)
            definitions.append(combine_definitions(entry.definitions))
            pos.append(entry.pos)


    f = open("../src/constants/wordlist.ts", "w")
    
    f.write('export const WORDS = [\n')
    for w in words:
        f.write(f'  \'{w}\',\n')
    f.write(']\n')
    f.write('\n')
    
    f.write('export const WORDS_WITH_VOWELS = [\n')
    for w in words_with_vowels:
        f.write(f'  \'{w}\',\n')
    f.write(']\n')
    f.write('\n')
    
    f.write('export const DEFINITIONS = [\n')
    for w in definitions:
        f.write(f'  "{w}",\n')
    f.write(']\n')
    f.write('\n')
    
    f.write('export const PARTS_OF_SPEECH = [\n')
    for w in pos:
        f.write(f'  \'{w}\',\n')
    f.write(']\n')

    f.close()

    valid_guesses = []
    valid_guesses_filename = '../src/constants/validGuesses.ts'
    with open(valid_guesses_filename, 'r', encoding='utf-8') as file:
        for line in file:
            if '[' in line or ']' in line:
                continue
            w = line.strip().replace(',', '').replace('\'', '')
            valid_guesses.append(w)
    
    for w in words:
        if w in valid_guesses:
            continue
        valid_guesses.append(w)
    
    f = open(valid_guesses_filename, "w")
    f.write('export const VALID_GUESSES = [\n')
    for w in valid_guesses:
        f.write(f'  \'{w}\',\n')
    f.write(']\n')
    f.write('\n')
    f.close()
