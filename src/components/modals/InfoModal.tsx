import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="ܐܘܼܪܚܵܐ ܕܫܸܥܝܵܐ"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-2xl text-gray-500 dark:text-gray-300">
      ܒܨܝܼ ܥܲܠ ܡܸܠܬܵܐ ܝܵܘܡܵܝܬܵܐ ܓܵܘ ܫܲܒ݂ܥܵܐ ܢܘܼܣܵܝܹ̈ܐ ܀
      ܒܵܬܵܪ ܟܠ ܢܘܼܣܵܝܵܐ ܡܫܲܚܠܸܦ ܓܵܘܢܵܐ ܕܲܡܪ̈ܲܒܥܹܐ، ܘܡܲܚܙܹܐ ܟܡܵܐ ܩܲܪܝܼܒ݂ ܐܲܢ݇ܬ ܥܲܠ ܡܸܠܬܵܐ ܬܪܝܼܨܬܵܐ
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ܦ" status="correct" />
        <Cell value="ܬ" />
        <Cell value="ܠ" />
        <Cell value="ܬ" />
        <Cell value="ܐ" />
      </div>
      <p className="text-xl text-gray-500 dark:text-gray-300">
      ܐܵܬܘܼܬܐ ܕ”ܦ” ܝܼܠܵܗ̇ ܒܕܘܼܟܬܵܐ ܬܪܝܼܨܬܵܐ
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ܬ" />
        <Cell value="ܢ" />
        <Cell value="ܝ" status="present" />
        <Cell value="ܬ" />
        <Cell value="ܐ" />
      </div>
      <p className="text-xl text-gray-500 dark:text-gray-300">
      ܐܝܼܬ ܐܵܬܘܼܬܵܐ ܕ”ܝ” ܒܡܸܠܬܵܐ، ܐܸܠܵܐ ܠܵܐ ܝܠܵܗ̇ ܒܕܘܼܟܬܵܐ ܬܪܝܼܨܬܵܐ
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ܒ" />
        <Cell value="ܫ" />
        <Cell value="ܝ" />
        <Cell value="ܠ" status="absent" />
        <Cell value="ܐ" />
      </div>
      <p className="text-xl text-gray-500 dark:text-gray-300">
      ܠܲܝܬ ܐܵܬܘܼܬܵܐ ܕ”ܠ” ܓܵܘ ܡܸܠܬܵܐ
      </p>
    </BaseModal>
  )
}
