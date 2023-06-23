import Link from 'next/link';
import '../../styles/fashion/_cta.scss'
const CTA = () => {
    return (
        <>
            <section id="download-2">
                <div className="bg-scroll bg-inner division">
                    <section id="Cta">
                        <div className="text-center">
                            <h2 className="text-white pb-3">Need assistance?</h2>
                            <p className="text-white">If you have any questions or concerns regarding these terms and conditions, please contact us.</p>
                            <div className="displayBtn">
                                <div className="my-3">
                                    <Link href="/faq">
                                        <button type="button" className="btn text-white text-center">Go to FAQ</button>
                                    </Link>
                                </div>
                                <div className="my-3">
                                    <Link href="/contact">
                                        <button type="button" className="btn text-white">Contact Now</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}

export default CTA;