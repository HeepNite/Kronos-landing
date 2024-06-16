
const Footer = () => {
    return (
        <footer className='py-5 sm:px-10 px-5'>
            <div className='screen-max-widht flex items-center gap-2 md:gap-5'>
                <p className='font-bold text-gray text-xs md:text-sm' > More ways to contact</p>
                <span className='underline text-titanium text-xs'> Find an Apple Store</span>
                <span className=' text-gray text-xs'> Find an Apple Store</span>
                <span className='underline text-titanium text-xs'> Find an Apple Store</span>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px] w-full' />
            <div className="flex md:flex-row flex-col md:items-center justify-between gap-5">
                <p className='font-semibold text-gray text-xs'>
                    Copyright @ 2024 Aplle Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <u className=' text-xs text-gray flex list-none gap-10 '>
                    <li>Lorem Ipsum is simply</li>
                    <li>Lorem Ipsum is simply</li>
                    <li>Lorem Ipsum is simply</li>
                    <li>Lorem Ipsum is simply</li>
                    <li>Lorem Ipsum is simply</li>
                </u>
            </div>
        </footer>
    )
}

export default Footer