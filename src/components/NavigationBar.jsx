import React from 'react'

const NavigationBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg shadow"
        style={{
          background: "linear-gradient(90deg, #4A00E0, #8E2DE2)",
          padding: "12px 20px"
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold"
            href="/"
            style={{
              color: "white",
              fontSize: "28px",
              letterSpacing: "1px"
            }}
          >
            📚 Book App
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">

              <a
                className="nav-link mx-2"
                href="/"
                style={{
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "8px",
                  padding: "8px 15px",
                  transition: "0.3s"
                }}
              >
                ➕ Add Book
              </a>

              <a
                className="nav-link mx-2"
                href="/search"
                style={{
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "8px",
                  padding: "8px 15px"
                }}
              >
                🔍 Search Book
              </a>

              <a
                className="nav-link mx-2"
                href="/delete"
                style={{
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "8px",
                  padding: "8px 15px"
                }}
              >
                🗑 Delete Book
              </a>

              <a
                className="nav-link mx-2"
                href="/view"
                style={{
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "8px",
                  padding: "8px 15px"
                }}
              >
                📖 View Books
              </a>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar