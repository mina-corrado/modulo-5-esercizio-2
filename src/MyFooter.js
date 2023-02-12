
function MyFooter() {
    return (
        <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer</h5>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#1">Link 1</a></li>
                        <li><a href="#2">Link 2</a></li>
                        <li><a href="#3">Link 3</a></li>
                        <li><a href="#4">Link 4</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#1">Link 1</a></li>
                        <li><a href="#2">Link 2</a></li>
                        <li><a href="#3">Link 3</a></li>
                        <li><a href="#4">Link 4</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2023 Copyright:
            <a href="#home"> Mina Srl</a>
        </div>

    </footer>
      );
}

export default MyFooter;