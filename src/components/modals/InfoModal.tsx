import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="ܐܘܼܪܚܵܐ ܕܥܵܒ݂ܘܿܕܘܼܬܵܐ" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-2xl text-gray-500 dark:text-gray-300">
        ܓ̰ܵܪܸܒ ܘܡܵܫܸܟ݇ܚ ܡܹܠܵܐ ܕܘܼܙ ܓܵܘ ܫܬܵܐ ܡܓ̰ܵܪܸܒܝܲܬܹܐ ܀
        ܒܲܬ݇ܪ ܟܘܼܕ ܓ̰ܪܵܒܬܵܐ܉ ܓܵܘܢܵܐ ܕܡܪܲܒܥܵܬܹܐ ܒܫܵܚܠܸܦܝܼ ܘܡܲܚܙܝܼ ܟܡܵܐ ܩܘܼܪܒܵܐ ܝܘܬ ܥܲܠ ܡܹܠܵܐ ܕܘܼܙ
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ܦ" status="correct" />
        <Cell value="ܬ" />
        <Cell value="ܠ" />
        <Cell value="ܬ" />
        <Cell value="ܐ" />
      </div>
      <p className="text-xl text-gray-500 dark:text-gray-300">
        ܐܵܬܘܼܬܵܐ 'ܦ' ܓܵܘ ܕܘܼܙ ܫܵܘܦܵܐ ܝܼܠܵܗ̇
      </p>
      
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ܬ" />
        <Cell value="ܢ" />
        <Cell value="ܝ" status="present" />
        <Cell value="ܬ" />
        <Cell value="ܐ" />
      </div>
      <p className="text-xl text-gray-500 dark:text-gray-300">
        ܐܵܬܘܼܬܵܐ 'ܝ' ܓܵܘ ܡܹܠܵܐ ܝܼܠܵܗ̇܉ ܐܝܼܢܵܐ ܠܵܐ ܓܵܘ ܫܵܘܦܵܐ ܕܘܼܙ
      </p>
      
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ܦ" />
        <Cell value="ܣ" />
        <Cell value="ܝ" />
        <Cell value="ܠ" status="absent" />
        <Cell value="ܐ" />
      </div>
      <p className="text-xl text-gray-500 dark:text-gray-300">
        ܐܵܬܘܼܬܵܐ 'ܠ' ܠܹܐ ܝ݇ܠܵܗ̇ ܓܵܘ ܡܹܠܵܐ
      </p>
    </BaseModal>
  )
}
