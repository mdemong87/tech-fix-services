import Container from "./Container";

const Location = () => {
    return (
        <section>
            <Container>
                <div className="border border-yellow-500 h-[500px]  my-7 md:my-16 rounded-xl border-2 p-1 w-full">
                    <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.3893230982412!2d51.527092782796764!3d25.288190853470677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c539693ebb71%3A0x19cc35cc4f52db2b!2sMsheireb%20Museums!5e0!3m2!1sen!2sbd!4v1750920437302!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </section>
    )
}

export default Location;