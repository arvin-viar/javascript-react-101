function Banner({id, title, body}) {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__details">
                    <p>Hello! Welcome to</p>
                    <h1 className="banner__details-title">Gadget Trends</h1>
                    <p className="banner__details-desc">
                        Quisque ac tellus fringilla, gravida ex id, ultrices leo.
                        Cras tempus elit eget lorem consectetur sollicitudin.
                        Morbi ut interdum nibh. Cras dui quam, congue eu massa non,
                        consequat fermentum massa. Vestibulum sodales, ligula at
                        consectetur dapibus, dolor enim condimentum risus, ac
                        consequat lorem ipsum eu mauris. Pellentesque ullamcorper
                        elementum facilisis. Aliquam tincidunt elit eu justo scelerisque,
                        ut cursus lectus gravida. Vivamus suscipit nunc est, eu molestie
                        lorem congue venenatis. Integer tristique leo eu pharetra
                        condimentum. Nunc pharetra aliquet quam eget pellentesque.
                        Proin suscipit sapien at enim egestas aliquet. Nam ut dictum
                        ipsum. Aenean iaculis urna a tempor pharetra.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Banner;
