export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ListIF {
    printDom(): Promise<void>;
}

export class List implements ListIF {
    dataUrl: string;
    data: Product[] | null;
    targetDom: HTMLElement;
    constructor(dataUrl: string, targetDom: HTMLElement) {
        this.dataUrl = dataUrl;
        this.data = null;
        this.targetDom = targetDom;
    }

    async setData() {
        const res = await fetch(this.dataUrl);
        const { products } = await res.json() as { products: Product[] };
        this.data = products;
    }

    async printDom() {
        if (!this.data) {
            await this.setData();
        }
        this.targetDom.innerHTML = '';
        this.targetDom.innerText = JSON.stringify(this.data, null);
    }
}


export class ListProxy implements ListIF {
    list: List | null;
    loading: boolean = false;
    targetDom: HTMLElement;
    dataUrl: string;

    constructor(dataUrl: string, targetDom: HTMLElement) {
        this.list = null;
        this.targetDom = targetDom;
        this.dataUrl = dataUrl;
    }

    setLoadingMessage() {
        this.targetDom.innerHTML = '';
        const $message = document.createElement('span');
        $message.innerText = '로 딩 중 ~~~~~~~';
        this.targetDom.appendChild($message);
    }

    setList(list: List) {
        this.list = list;
    }

    async printDom(): Promise<void> {

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
        this.list!.printDom(); // 기능 위임 진행
    }
}


const $body = document.querySelector('body');
if ($body) {
    const list = new ListProxy("https://dummyjson.com/products", $body);
    list.printDom();
};

