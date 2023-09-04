import reactLogo from "../assets/react.svg";

export default function Conteudo(props){

    let reactLogoAlt = "React Logo";

    return(
        <>
            <section>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis veniam quis et repellendus esse voluptates voluptate accusamus cum, obcaecati, delectus dolore soluta architecto recusandae, in laborum aperiam voluptatum similique!</p>
                    <p>Necessitatibus soluta dignissimos enim dicta. Ratione pariatur deserunt fuga, at ut dicta optio. Nobis culpa architecto sunt amet iure blanditiis incidunt, libero facere iste vero autem commodi hic. Vitae, tenetur?</p>
                    <p>Alias, est dolorum provident rem neque, facere cum dolor perspiciatis cumque placeat delectus? Magni fuga labore obcaecati voluptatem repellendus. Dolorum corporis, fugit velit pariatur veniam dolorem consequatur odit deserunt veritatis!</p>

                    <img src={reactLogo} alt={reactLogoAlt} />
                    <img src={props.viteLogoProps} alt={props.viteLogoAltProps} />
                </div>
            </section>
        </>
    )
}