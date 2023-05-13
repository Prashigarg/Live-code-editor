function run(){
    let htmlcode=document.getElementById("html-code").value;
    let csscode=document.getElementById("CSS-code").value;
    let jscode=document.getElementById("JS-code").value;
    let outputcode=document.getElementById("Output");
    Output.contentDocument.body.innerHTML=htmlcode +"<style>"+ csscode + "</style>";
    Output.contentWindow.eval(jscode);
}