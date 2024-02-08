import aboutBanner from '../assets/about1.png'
import { Product } from './product'

export const About = () => {
    const nameBanner ='The unseen of spending three years at Pixelgrade';
    return (
        <section id='about'>
            {/* about text */}
            <Product banner = {aboutBanner} name={nameBanner}/>
            {/* company stats */}
            <div className='px-4 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-wrap justify-center sm:justify-evenly '>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <br />
                            <span className='text-brandPrimary'>business reinvent itself</span></h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>We reached here with our hard work and dedication</p>
                    </div>
                    {/* stats */}

                    <div className='flex flex-wrap gap-8 gap-x-16 justify-center'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src='/src/assets/logoLocal/Icon_members.png' alt='logo de members' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p className='text-neutralGrey'>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src='/src/assets/logoLocal/Icon_boking.png' alt='logo de members' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                                    <p className='text-neutralGrey'>Event Bokings</p>
                                </div>
                            </div>

                        </div>
                        <div className='space-y-8'>

                            <div className='flex items-center gap-4'>
                                <img src='/src/assets/logoLocal/Icon_clubs.png' alt='logo de members' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>46,304</h4>
                                    <p className='text-neutralGrey'>Clubs</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src='/src/assets/logoLocal/Icon_payment.png' alt='logo de members' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,343</h4>
                                    <p className='text-neutralGrey'>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}