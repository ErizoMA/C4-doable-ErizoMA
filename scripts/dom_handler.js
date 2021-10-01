const DOMHandler = (() => ({
  render: (element) => {
    const container = document.querySelector(".js-root");
    container.innerHTML = element.render();
    element.initListeners();
  },
}))();

export default DOMHandler;