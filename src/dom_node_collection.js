class DOMNodeCollection{
    constructor(array){
        this.array = array;
        //apply to every node in the interal array
        // return this.array.map(el => {
        //     $l(el);
        // })
    }

    html(str){
        if (str === undefined) {
            return this.array[0].innerHTML;
        } else {
            for (let i = 0; i < this.array.length; i++) {
                this.array[i].innerHTML = str;
            }
        }
        return this;
    }
    
    empty(){
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].innerHTML = "";
        } 
        return this;
    }

    append(arg) {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].innerHTML += arg;
        }
        return this
    }



    remove() {
        let parents = [];
        this.array.each(parent => parents.push(parent));

        for (let i = 0; i < parents.length; i++) {
            this.array[i].removeChild(parents[i]);
        }

    }

    // ul class="ull"
    //     li class ="lii"     $("li").remove();
    //         li
    //         li

    // ol class="ol"
    // li
    // li
    // li

    attr(key, value){
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].setAttribute(key, value)
        }
        return this
    }

    addClass(value){
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].setAttribute("class", value)
        }
        return this
    }

    removeClass(){
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].removeAttribute("class")
        }
        return this
    }


    // ul   ol  ==>   li   ,  $l("ul").find("li")
    find(arg){
        let selected = [];
        for (let i = 0; i < this.array.length; i++) {
            // let node = this.array[i]
            selected = selected.concat(Array.from(this.array[i].querySelectorAll(arg)));
        }
        // const collect = Array.from(selected);
        return new DOMNodeCollection(selected);
    }


    children(){ // [ul, ul]
        let childArr = [];
        for (let i = 0; i < this.array.length; i++) {
            childArr = childArr.concat(this.array[i].children);
        }
        return childArr;
    }

    parent(){
        let parentArr = [];
        for (let i = 0; i < this.array.length; i++) {
            if (parentArr.indexOf(this.array[i].parentNode) === -1 ) {
                parentArr = parentArr.concat(this.array[i].parentNode);
            }
        }
        return parentArr;
    }
}

module.exports = DOMNodeCollection;