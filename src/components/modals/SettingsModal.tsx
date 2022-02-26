import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import { SettingsDropdown } from './SettingsDropdown'


type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  chooseScript: string
  handleScript: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  chooseScript,
  handleScript
}: Props) => {
  return (
    <BaseModal title="ܩܪܩܙܝ̈ܬܐ" isOpen={isOpen} handleClose={handleClose}>
      <div className="grid-cols-2 gap-4">
        <SettingsToggle
          settingName="ܟ̰ܵܬܝܼܢ"
          flag={isHardMode}
          handleFlag={handleHardMode}
        />
        <SettingsToggle
          settingName="ܚܫܟܢܬܐ"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsDropdown
          settingName="ܟܬܝܒܬܐ"
          flag={chooseScript}
          handleFlag={handleScript}
        />
      </div>
    </BaseModal>
  )
}
