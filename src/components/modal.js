import { MdCancel } from 'react-icons/md'

export default function Modal({ setIsModal }) {
  return (
    <div className="modalWrapper">
      <div className="modalDiv">
        <div className="modalNav">
          <div></div>
          <p className="logo">RudeBudget</p>
          <MdCancel onClick={() => setIsModal(false)} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum,
          modi saepe! Odit, perspiciatis officiis? Blanditiis quasi doloremque
          numquam voluptate provident, natus quam voluptatum. Atque natus beatae
          provident, distinctio perspiciatis eligendi! Vitae cupiditate nemo
          quos incidunt quasi placeat sit itaque veritatis. Modi, maiores
          obcaecati aliquam est earum magni, iure beatae distinctio, id eos
          suscipit fuga quo? Explicabo enim rerum eaque soluta. Deserunt ad,
          ipsam quo incidunt non dolorum magni in culpa numquam alias!
          Doloremque cupiditate nihil illo sapiente rerum. Quia maiores ad
          consequatur vero iure, neque aliquam? Explicabo accusamus facilis hic.
          Quisquam odit autem veniam doloribus similique consequatur illum quas
          alias consectetur ea temporibus nemo nihil porro aliquid ipsam
          tempora, voluptates assumenda unde tempore recusandae fugit excepturi
          error sed in. Earum. Error, sed exercitationem, quisquam totam tempora
          voluptatibus ipsa doloremque, veritatis dolore ducimus esse cumque.
          Placeat voluptates tempore enim incidunt doloribus sunt, accusantium
          expedita! Tempore eligendi doloribus facilis commodi laborum
          assumenda.
        </p>
      </div>
    </div>
  )
}
