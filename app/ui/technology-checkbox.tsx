export default function TechnologyCheckbox({value, id}: {value: string, id: string}){
    return(
        <div className="h-button rounded border-[1px] mb-checkbox border-monokaiPurple text-monokaiPurple w-fit flex justify-center items-center min-w-[64px] mr-[8px]">
            <input className="ml-[4px] mt-[4px] mb-[4px] mr-[4px] h-6 w-6 border-[1px] border-monokaiPurple rounded text-monokaiPurple" id={id} type="checkbox" name="technology" value={value}></input>
            <label className="w-fit pr-[24px]" htmlFor={id}>{value}</label>
        </div>

    )
}