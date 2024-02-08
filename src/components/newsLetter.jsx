export const NewsLetter = () => {
    return (
        <section className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="testimonial">
            <div className="flex items-center justify-center lg:w-2/5 mx-auto">
                <div className="text-center">
                    <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-16 ">
                        Pellentesque suscipit fringilla libero eu.
                    </h2>
                    <div className="flex justify-center ">
                        <button className="btn-primary  ">
                            Get a demo

                            <svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 18 25"
                                 width="18" height="15"
                                 className="inline-block ml-2"
                                 >
                                <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                                 data-name="Right" stroke="white" />
                                 </svg>

                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}