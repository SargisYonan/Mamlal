import classnames from 'classnames';

type Props = {
  settingName: string
  flag: string
  handleFlag: Function
}

export const SettingsDropdown = ({ settingName, flag, handleFlag }: Props) => {
  
  const Dropdown = classnames(
    'form-select form-select-lg mb-3 appearance-none block w-full px-4 py-2 text-2xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
  )

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    handleFlag(value)
  };

  return (
    <div className="flex justify-between items-center gap-8 mt-2">
      <h2 className="text-2xl text-gray-500 dark:text-gray-300">
        {settingName}
      </h2>
      <div>
        <select className={Dropdown} onChange={selectChange} defaultValue={flag} dir="rtl">
            <option value="eastern">ܡܕܢܚܝܐ</option>            
            <option value="estrangela">ܐܣܛܪܢܓܠܐ</option>
            <option value="western">ܣܪܛܐ</option>            
        </select>            
        </div>
    </div>
  );
};
