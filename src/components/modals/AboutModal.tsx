import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="ܒܘܕ ܕܐܗܐ ܛܐܠܬܐ" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-2xl text-gray-500 dark:text-gray-300">
        ܡܡܠܠ ܀{' '}
        <a href="https://yonan.org/" className="underline font-bold">
          ܒܪܝܢܐ ܕܡܡܠܠ
        </a>{' '}
      </p>
    </BaseModal>
  )
}
