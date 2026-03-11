import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Kontaktid</h3>
                    <p>Robert Koor</p>
                    <p>Tartu Ülikool</p>
                </div>
                <div className="footer-section">
                    <h3>Statistikaamet kodutöö</h3>
                    <a href="https://github.com/rbr4t" target="_blank" rel="noopener noreferrer">
                        <p>Github</p>
                    </a>

                    <a href="https://www.linkedin.com/in/robert-koor-0b96463ab/" target="_blank" rel="noopener noreferrer">
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer