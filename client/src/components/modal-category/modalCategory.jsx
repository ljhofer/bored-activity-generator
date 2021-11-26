import './modal-category.css'

export default function ModalCategory() {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div class="box">
  <a href="#m2-o" class="link-1" id="m2-c">Modal 2</a>
  <p class="box__info">With Background (Opacity .4)</p>

  <div class="modal-container" id="m2-o" style="--m-background: hsla(0, 0%, 0%, .4);">
    <div class="modal">
      <h1 class="modal__title">Modal 2 Title</h1>
      <p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.</p>
      <button class="modal__btn">Button &rarr;</button>
      <button class="modal__btn">Button &rarr;</button>
      <a href="#m2-c" class="link-2"></a>
    </div>
  </div>
</div>
  )

}