function scrollToElement(id){
    const element=document.getElementById(id);
    if(element){
        element.scrollIntoView({behavior:"smooth"})
    }
}

export default scrollToElement;