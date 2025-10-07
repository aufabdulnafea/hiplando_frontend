
export default function FileInput() {
    return (
        <div>
            <label htmlFor="file-input" className="sr-only">Choose file</label>
            <input type="file" name="file-input" id="file-input" className="
                block w-full border border-zinc-300 rounded-lg text-sm 
                focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                disabled:pointer-events-none
                file:bg-primary/10 file:border-0
                file:me-4 file:py-3 file:px-4">
            </input>
        </div>
    )
}