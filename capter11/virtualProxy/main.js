class List {
  constructor(dataUrl, targetDom) {
    this.dataUrl = dataUrl;
    this.data = null;
    this.targetDom = targetDom;
  }
  async setData() {
    const res = await fetch(this.dataUrl);
    const { products } = await res.json();
    this.data = products;
  }
  async printDom() {
    if (!this.data) {
      await this.setData();
    }
    this.targetDom.innerHTML = "";
    this.targetDom.innerText = JSON.stringify(this.data, null);
  }
}
class ListProxy {
  constructor(dataUrl, targetDom) {
    this.loading = false;
    this.list = null;
    this.targetDom = targetDom;
    this.dataUrl = dataUrl;
  }
  setLoadingMessage() {
    this.targetDom.innerHTML = "";
    const $message = document.createElement("span");
    $message.innerText = "로 딩 중 ~~~~~~~";
    this.targetDom.appendChild($message);
  }
  setList(list) {
    this.list = list;
  }
  async printDom() {
    // 이미 로딩이 끝난 경우
    if (this.list) {
      this.list.printDom();
      return;
    }
    this.setLoadingMessage();
    // 로딩 진행 중인데 재 시도 방어
    if (this.loading) return;
    // 데이터 리스트 프린트 위임하기
    this.loading = true;
    this.setList(new List(this.dataUrl, this.targetDom));
    this.list.printDom();
  }
}

const $body = document.querySelector("body");
if ($body) {
  const list = new ListProxy("https://dummyjson.com/products", $body);
  list.printDom();
}
