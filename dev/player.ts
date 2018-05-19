class Player {

    private speedx:number
    private speedy:number
    private posx:number
    private posy:number
    private element: HTMLElement

    constructor(minWidth: number, maxWidth: number) {
        this.element = document.createElement("player")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
        
        this.posy = 400
        this.posx = 50
        this.speedx = 0
        this.speedy = 0
    }

    public windowCol() : void {
        if(this.posx + this.element.clientWidth > window.innerWidth) {
            this.posx && this.posy == 300
            this.speedx *= 0
        }
        if (this.posx < 0) {
            this.posx = 0
            this.speedx && this.speedy * 0
            console.log("hit the edge")
        }

        if (this.posy < 280 ) {
            this.speedy *= 0
        }
        if (this.posy + this.element.clientHeight > window.innerHeight) {
            this.speedy *= 0
        }
    }

    public update():void {
        this.posx = this.posx + this.speedx
        this.posy = this.posy + this.speedy
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`

        if (this.posx >= window.innerWidth ) {
            this.posx = 0
        }
        this.windowCol()
    }

    
    onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 37:
            this.speedx = -5
            this.element.style.backgroundPositionX = `-72px`;
            this.element.style.transform = 'scaleX(-1) !important';
            break
        case 39:
            this.speedx = 5
            this.element.style.backgroundPositionX = `-72px`;
            break
        case 38:
            this.speedy = -5
            this.element.style.backgroundPositionX = `-143px`;
            break
        case 40:
            this.speedy = 5
            this.element.style.backgroundPositionX = `0px`;
            break
        }
    }
    
    onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 37:
            this.speedx = 0
            break
        case 39:
            this.speedx = 0
            break
        case 38:
            this.speedy = 0
            break
        case 40:
            this.speedy = 0
            break
        }
    }
    

    public boundingBox() {
        return this.element.getBoundingClientRect();
    }
}