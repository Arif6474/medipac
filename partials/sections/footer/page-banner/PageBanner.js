import './PageBanner.css'

function PageBanner({pageTitle, children}) {
    return (
        <section className="page_banner">
            <div className="container">
                <div className="content">
                    <div className="breadcrumb">
                        {children}
                    </div>
                    {pageTitle &&
                        <h1>{pageTitle}</h1>
                    }
                </div>
            </div>
        </section>
    )
}

export default PageBanner