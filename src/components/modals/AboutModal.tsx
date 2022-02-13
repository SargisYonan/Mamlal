import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="ܒܘܕ ܛܐܠܬܐ" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-3xl text-gray-500 dark:text-gray-300">
        ܡܡܠܠ - ܛܐܠܬܐ ܕܡܠ̈ܐ{' '}
        <a
          href="https://yonan.org/"
          className="underline font-bold"
        >
        ܀
          ܒܪܝܢܐ ܕܐܗܐ ܛܐܠܬܐ
        </a>{' '}
      </p>
    </BaseModal>
  )
}
