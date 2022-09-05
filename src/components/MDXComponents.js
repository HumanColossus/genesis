const MDXComponents = {
    h1: (props) => <h1 style={{ fontSize: "2rem", paddingTop: 10, paddingBottom: 10 }} {...props} />,
    h2: (props) => <h2 style={{ fontSize: "1.7rem", paddingTop: 10, paddingBottom: 10 }} {...props} />,
    h3: (props) => <h3 style={{ fontSize: "1.5rem", paddingTop: 10, paddingBottom: 10 }} {...props} />,
    p: (props) => <p style={{ fontSize: "1.1rem", }} {...props} />,
    img: (props) => <img style={{ paddingTop: 10, paddingBottom: 10 }} {...props} />,

}

export default MDXComponents