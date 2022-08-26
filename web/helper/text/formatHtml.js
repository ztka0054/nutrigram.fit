export let formatHtmlP = (string) => {
    if(string!=null)
    return string.split(/\n/g).map((element, i) => {
        return <p key={`html_${i}`}>
            {element}
        </p>
    })
}