import React from 'react'
import Link from 'next/link'

const contact = () => {
    return (
        <main>
            <section className="text-white min-h-[100vh] flex px-[10vw]">
                <div className="page flex flex-col gap-4 py-6">
                    <p className="font-extrabold text-4xl">Contact Us</p>
                    <p className="text-lg">At CS Server Hub, we value our community and are here to support you! Whether you have questions, need assistance, or want to share feedback, our team is ready to help. Feel free to reach out to us through any of the channels below.</p>

                    <p className="font-extrabold text-4xl">Get in Touch</p>
                    <p className="font-extrabold text-2xl">Customer Support</p>
                    <p className="text-lg">For any technical issues, account questions, or general assistance, please email us at <Link className='text-blue-600  px-1 py-1 hover:bg-[#F0EFEC] rounded transition-colors duration-300 hover:text-black' href="mailto:lilburneraccount@protonmail">support@csserverhub.com</Link> or fill out our contact form below. Our dedicated support team is available Monday through Friday from 9:00 AM to 6:00 PM IST.</p>

                    <p className="font-extrabold text-2xl">Business Inquiries</p>
                    <p className="text-lg">For partnerships, media inquiries, or business-related questions, please contact our business team at <Link className='text-blue-600 px-1 py-1 hover:bg-[#F0EFEC] rounded transition-colors duration-300 hover:text-black' href="mailto:lilburneraccount@protonmail" >business@csserverhub.com</Link></p>

                    <p className="font-extrabold text-2xl">Reach Us on Social Media</p>

                    <ul className='text-lg flex flex-col'>
                        <li>Instagram:
                            <Link
                                target={"_blank"}
                                className='text-blue-600 px-1 py-1 hover:bg-[#bbbbbb] rounded transition-colors duration-300 hover:text-black'
                                href="https://www.instagram.com/" >@cs_server_hub
                            </Link>
                        </li>
                        <li>Snapchat:
                            <Link target={"_blank"}
                                className='text-blue-600 px-1 py-1 hover:bg-[#bbbbbb] rounded transition-colors duration-300 hover:text-black'
                                href="https://www.snapchat.com/?original_referrer=www.google.com" >@cs_server_hub
                            </Link>
                        </li>
                        <li>Facebook:
                            <Link
                                target={"_blank"}
                                className='text-blue-600 px-1 py-1 hover:bg-[#bbbbbb] rounded transition-colors duration-300 hover:text-black'
                                href="https://www.facebook.com/" >@cs_server_hub
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default contact