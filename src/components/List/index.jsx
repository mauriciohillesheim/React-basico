/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import './styles.css'

export default function List({ titulo = "Sem titulo" }) {
    return (
        <section>
            <h2>{titulo}</h2>
            <div class="container">
                <div>
                    <h3>Lista não ordenada:</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
                <div>
                    <h3>Lista ordenada</h3>
                        <ol>
                            <li>Primeiro Item</li>
                            <li>Segundo Item</li>
                            <li>Terceiro Item</li>
                        </ol>
                </div>
            </div>
        </section>
    )
}