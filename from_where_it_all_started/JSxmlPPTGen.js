var xmlDoc;
var xmlTmp;
var htmlPart1, htmlPart2;

//executed at page load
function init(){
                document.getElementById('slideLayout').selectedIndex = 0;
			editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Description:</td><td> <textarea id='desc' rows='3' value='Description'>Description...</textarea></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
			document.getElementById('slideDemo').innerHTML = editCode;
                //xmlDOC initialized
                textXMLRoot='<ppt title="PPT"><slidelist></slidelist></ppt>';
                giveXMLTmp(textXMLRoot);
                xmlDoc=xmlTmp;
}
//end of function init()

//
function selectView(choice){//alert('a');
                if(choice==0){
                                document.getElementById('SlideGenerator').innerHTML = "Slide Demo";
                                document.getElementById('slidePreview').style.display = 'none';
                                document.getElementById('slideCode').style.display = 'none';
                                document.getElementById('slideDemo').style.display = 'block';
                }
                else if(choice==1){
                                pptPreviewer();
                                document.getElementById('SlideGenerator').innerHTML = "Slide Preview";
                                document.getElementById('slidePreview').style.display = 'block';
                                document.getElementById('slideCode').style.display = 'none';
                                document.getElementById('slideDemo').style.display = 'none';
                }
                else if(choice==2){
                                pptCoder();
                                document.getElementById('SlideGenerator').innerHTML = "Slide Code";
                                document.getElementById('slidePreview').style.display = 'none';
                                document.getElementById('slideCode').style.display = 'block';
                                document.getElementById('slideDemo').style.display = 'none';
                }
}

//executed at selection of slide template option
function selectSlide(){
		//alert(document.getElementById('slideLayout').selectedIndex);
                var editCode = "";
		if(document.getElementById('slideLayout').selectedIndex==0){
			editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Description:</td><td> <textarea id='desc' rows='3' value='Description'>Description...</textarea></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
			document.getElementById('slideDemo').src = editCode;
		}
		else if(document.getElementById('slideLayout').selectedIndex==1){
                        editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
			document.getElementById('slideDemo').innerHTML = editCode;
		}
		else if(document.getElementById('slideLayout').selectedIndex==2){
                        editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#1:</td><td><input id='line1' type='text' value='Text 1'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#2:</td><td><input id='line2' type='text' value='Text 2'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#3:</td><td><input id='line3' type='text' value='Text 3'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#4:</td><td><input id='line4' type='text' value='Text 4'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#5:</td><td><input id='line5' type='text' value='Text 5'/></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
			document.getElementById('slideDemo').innerHTML = editCode;
		}
		else if(document.getElementById('slideLayout').selectedIndex==3){
                        editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td colspan='3'><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Col#1:Line#1:</td><td><input id='col1line1' type='text' value='Col#1 Text 1'/></td><td>Col#2:Line#1:</td><td><input id='col2line1' type='text' value='Col#2 Text 1'/></td></tr>";
                        editCode = editCode + "<tr><td>Col#1:Line#2:</td><td><input id='col1line2' type='text' value='Col#1 Text 2'/></td><td>Col#2:Line#2:</td><td><input id='col2line2' type='text' value='Col#2 Text 2'/></td></tr>";
                        editCode = editCode + "<tr><td>Col#1:Line#3:</td><td><input id='col1line3' type='text' value='Col#1 Text 3'/></td><td>Col#2:Line#3:</td><td><input id='col2line3' type='text' value='Col#2 Text 3'/></td></tr>";
                        editCode = editCode + "<tr><td>Col#1:Line#4:</td><td><input id='col1line4' type='text' value='Col#1 Text 4'/></td><td>Col#2:Line#4:</td><td><input id='col2line4' type='text' value='Col#2 Text 4'/></td></tr>";
                        editCode = editCode + "<tr><td>Col#1:Line#5:</td><td><input id='col1line5' type='text' value='Col#1 Text 5'/></td><td>Col#2:Line#5:</td><td><input id='col2line5' type='text' value='Col#2 Text 5'/></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
			document.getElementById('slideDemo').innerHTML = editCode;
		}
		else if(document.getElementById('slideLayout').selectedIndex==4){
                        editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Image URL:</td><td><input id='img1' type='text' value='http://'/></td></tr>";
                        editCode = editCode + "<tr><td>Alternate Text:</td><td><input id='img1Alt' type='text' value='Title Based Image'/></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
			document.getElementById('slideDemo').innerHTML = editCode;
		}
		else if(document.getElementById('slideLayout').selectedIndex==5){
                        editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Left Image URL:</td><td><input id='imgL' type='text' value='http://'/></td></tr>";
                        editCode = editCode + "<tr><td>Alternate Text:</td><td><input id='imgLalt' type='text' value='Title Based Image Left'/></td></tr>";
                        editCode = editCode + "<tr><td>Right Image URL:</td><td><input id='imgR' type='text' value='http://'/></td></tr>";
                        editCode = editCode + "<tr><td>Alternate Text:</td><td><input id='imgRalt' type='text' value='Title Based Image Right'/></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
			document.getElementById('slideDemo').innerHTML = editCode;
		}
		else if(document.getElementById('slideLayout').selectedIndex==6){
			document.getElementById('slideDemo').src = "TitleVerTxtImg.htm";
                        editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#1:</td><td><input id='line1' type='text' value='Text 1'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#2:</td><td><input id='line2' type='text' value='Text 2'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#3:</td><td><input id='line3' type='text' value='Text 3'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#4:</td><td><input id='line4' type='text' value='Text 4'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#5:</td><td><input id='line5' type='text' value='Text 5'/></td></tr>";
                        editCode = editCode + "<tr><td>Right Image URL:</td><td><input id='imgR' type='text' value='http://'/></td></tr>";
                        editCode = editCode + "<tr><td>Alternate Text:</td><td><input id='imgRalt' type='text' value='Title Based Image Right'/></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
		}
		else if(document.getElementById('slideLayout').selectedIndex==7){
			document.getElementById('slideDemo').src = "TitleVerImgTxt.htm";
                        editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#1:</td><td><input id='line1' type='text' value='Text 1'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#2:</td><td><input id='line2' type='text' value='Text 2'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#3:</td><td><input id='line3' type='text' value='Text 3'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#4:</td><td><input id='line4' type='text' value='Text 4'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#5:</td><td><input id='line5' type='text' value='Text 5'/></td></tr>";
                        editCode = editCode + "<tr><td>Left Image URL:</td><td><input id='imgL' type='text' value='http://'/></td></tr>";
                        editCode = editCode + "<tr><td>Alternate Text:</td><td><input id='imgLalt' type='text' value='Title Based Image Left'/></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
		}
		else if(document.getElementById('slideLayout').selectedIndex==8){
			document.getElementById('slideDemo').src = "TitleHorTxtImg.htm";
                        editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#1:</td><td><input id='line1' type='text' value='Text 1'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#2:</td><td><input id='line2' type='text' value='Text 2'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#3:</td><td><input id='line3' type='text' value='Text 3'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#4:</td><td><input id='line4' type='text' value='Text 4'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#5:</td><td><input id='line5' type='text' value='Text 5'/></td></tr>";
                        editCode = editCode + "<tr><td>Bottom Image URL:</td><td><input id='imgB' type='text' value='http://'/></td></tr>";
                        editCode = editCode + "<tr><td>Alternate Text:</td><td><input id='imgBalt' type='text' value='Title Based Image Bottom'/></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
		}
		else if(document.getElementById('slideLayout').selectedIndex==9){
			document.getElementById('slideDemo').src = "TitleHorImgTxt.htm";
                        editCode = "<table border='0'>";
                        editCode = editCode + "<tr><td>Title:</td><td><input id='title' type='text' value='Title'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#1:</td><td><input id='line1' type='text' value='Text 1'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#2:</td><td><input id='line2' type='text' value='Text 2'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#3:</td><td><input id='line3' type='text' value='Text 3'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#4:</td><td><input id='line4' type='text' value='Text 4'/></td></tr>";
                        editCode = editCode + "<tr><td>Line#5:</td><td><input id='line5' type='text' value='Text 5'/></td></tr>";
                        editCode = editCode + "<tr><td>Top Image URL:</td><td><input id='imgT' type='text' value='http://'/></td></tr>";
                        editCode = editCode + "<tr><td>Alternate Text:</td><td><input id='imgTalt' type='text' value='Title Based Image Top'/></td></tr>";
                        editCode = editCode + "</table>";
                        document.getElementById('slideTool').innerHTML = editCode;
		}
}
//end of function selectSlide()

//creating new slide environment
function newSlide(){
                document.getElementById('slideLayout').selectedIndex=0;
                selectSlide();
                document.getElementById('slideCodeTxt').value="";
                document.getElementById('slidePrevie').innerHTML="";
}
//end of function newSlide()

//executed at moment user selects to save a slide
//@param slideID informing slide template to save slide accordingly
function addSlide(){                
                //if(document.getElementById('slideCodeTxt').value=="")
                                pptCoder();
                                
                document.getElementById("res").value = document.getElementById("res").value + document.getElementById('slideCodeTxt').value;            
                                
                xmlTmp=xmlDoc.firstChild;
                newel=xmlDoc.createElement("slideDetail");
                newtext=xmlDoc.createTextNode(document.getElementById('slideLayout').options[document.getElementById('slideLayout').selectedIndex].id);
                newel.appendChild(newtext);
                xN=xmlDoc.getElementsByTagName("slidelist")[0];
                xN.appendChild(newel);                
                
                ////giveXMLTmp(document.getElementById('slideCodeTxt').value);
                ////xN=xmlDoc.documentElement;
                ////xN.appendChild(xmlTmp.firstChild);
                alert("Current Slide has been added... \nclicking it again would duplicate the slide.");
}
//end of function addSlide()

//finalized the PPT, saving it finally
function finishPPT(){
                                var slideCodeTxt = document.getElementById("slideCodeTxt");
                                selectView(2);
                                document.getElementById("demo").style.display="none";
                                document.getElementById("preview").style.display="none";
                                document.getElementById("code").style.display="none";
				getHTMLParts();
                xmlTmp=xmlDoc.getElementsByTagName("slideDetail");
                slideCodeTxt.value='<ppt title="PPT"><slidelist>';
                if(xmlTmp.length>0){
                                for(i=0; i<xmlTmp.length;i++){
                                         slideCodeTxt.value = slideCodeTxt.value + '<slideDetail>' + xmlTmp[i].nodeValue + '</slideDetail>';
                                }
                }
                slideCodeTxt.value=slideCodeTxt.value + '</slidelist>' + document.getElementById("res").value + '</ppt>';
                document.getElementById('genView').innerHTML = '<legend id="SlideGenerator" style="background-color: Gray; color: White">Slide Presenter Code</legend><span id="xmlPPTName">XML File Name: \"PPT.xml\"</span><input type="button" value="Change PPT Name in Viewer" onclick="changeXMLFileName();"><br><textarea id="sPresenter" style="height:400px; width:100%"></textarea>';
                document.getElementById('sPresenter').value = htmlPart1;
                document.getElementById("res").value="";
                document.getElementById("res").style.display="block";
                document.getElementById("res").style.width="100%";
                document.getElementById("res").style.height="70px";
                document.getElementById("slideCode").style.height="320px";
                document.getElementById("sPresenter").style.height="300px";
                document.getElementById("res").value='::HOW TO USE::\nYour xml-PPT has been generated... successfully.\nLeft Side Text Box has main PPT Data in XML format... copy it complete and save it in any Blank XML File like \"PPT.xml\".\nRight Side Text Box has xml-PPT Presenter... its default xml-PPT source id \"PPT.xml\"... so if you saved the xml-PPT with some other name, change it using the button visible above it... copy this code also and save it in a blank HTML file, opening this file will start presentation.';
}
//end of function finishPPT()

//it generates PPT Code for current settings
function pptCoder(){//alert('code');
                var xCode=document.getElementById('slideCodeTxt');
		if(document.getElementById('slideLayout').selectedIndex==0){
                                xCode.value = '<slide layout="TitleSlide">'
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
				xCode.value = xCode.value + document.getElementById('title').value;
				xCode.value = xCode.value + '<div style="position:relative; top:105; font-size:large">';
				xCode.value = xCode.value + document.getElementById('desc').value;
				xCode.value = xCode.value + '</div>  </div>  </slide>';
                }
                else if(document.getElementById('slideLayout').selectedIndex==1){
                                xCode.value = '<slide layout="TitleOnly">';
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
				xCode.value = xCode.value + document.getElementById('title').value;
                                xCode.value = xCode.value + '</div>  </slide>';
                }
                else if(document.getElementById('slideLayout').selectedIndex==2){
                                xCode.value = '<slide layout="TitleText">';
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
				xCode.value = xCode.value + document.getElementById('title').value;
                                xCode.value = xCode.value + '<div style="position:relative; top:15; text-align:left; font-size:large">';
				xCode.value = xCode.value + '<ul>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line1').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line2').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line3').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line4').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line5').value + '</li>';
				xCode.value = xCode.value + '</ul>  </div>  </div>  </slide>';
                }
                else if(document.getElementById('slideLayout').selectedIndex==3){
                                xCode.value = '<slide layout="Title2Col">';
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
                                xCode.value = xCode.value + document.getElementById('title').value;
                                xCode.value = xCode.value + '<div style="position:relative; top:15; text-align:left; font-size:large">';
                                xCode.value = xCode.value + '<div style="position:absolute; top:5px; left:5px; width:45%;">';
				xCode.value = xCode.value + '<ul>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col1line1').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col1line2').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col1line3').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col1line4').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col1line5').value + '</li>';
				xCode.value = xCode.value + '</ul>';
                                xCode.value = xCode.value + '</div>';
                                xCode.value = xCode.value + '<div style="position:absolute; top:5px; right:5px; width:45%;">';
				xCode.value = xCode.value + '<ul>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col2line1').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col2line2').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col2line3').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col2line4').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('col2line5').value + '</li>';
				xCode.value = xCode.value + '</ul>  </div>  </div>  </div>  </slide>';
                }
                else if(document.getElementById('slideLayout').selectedIndex==4){
                                xCode.value = '<slide layout="TitleImg">';
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
				xCode.value = xCode.value + document.getElementById('title').value;
                                xCode.value = xCode.value + '<div style="position:relative; top:15; text-align:left; font-size:large">';
				xCode.value = xCode.value + '<img src="' + document.getElementById('img1').value + '" alt="' + document.getElementById('img1Alt').value + '"></img>';
                                xCode.value = xCode.value + '</div>  </div>  </slide>';
                }
                else if(document.getElementById('slideLayout').selectedIndex==5){
                                xCode.value = '<slide layout="Title2Img">';
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
                                xCode.value = xCode.value + document.getElementById('title').value;
                                xCode.value = xCode.value + '<div style="position:relative; top:15; text-align:left; font-size:large">';
                                xCode.value = xCode.value + '<div style="position:absolute; top:5px; left:5px; width:45%;">';
				xCode.value = xCode.value + '<img src="' + document.getElementById('imgL').value + '" alt="' + document.getElementById('imgLalt').value + '"></img>';
                                xCode.value = xCode.value + '</div>';
                                xCode.value = xCode.value + '<div style="position:absolute; top:5px; right:5px; width:45%;">';
				xCode.value = xCode.value + '<img src="' + document.getElementById('imgR').value + '" alt="' + document.getElementById('imgRalt').value + '"></img>';
                                xCode.value = xCode.value + '</div>  </div>  </div>  </slide>';
                }
                else if(document.getElementById('slideLayout').selectedIndex==6){
                                xCode.value = '<slide layout="TitleVerTxtImg">';
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
                                xCode.value = xCode.value + document.getElementById('title').value;
                                xCode.value = xCode.value + '<div style="position:relative; top:15; text-align:left; font-size:large">';
                                xCode.value = xCode.value + '<div style="position:absolute; top:5px; left:5px; width:45%;">';
				xCode.value = xCode.value + '<ul>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line1').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line2').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line3').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line4').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line5').value + '</li>';
				xCode.value = xCode.value + '</ul>';
                                xCode.value = xCode.value + '</div>';
                                xCode.value = xCode.value + '<div style="position:absolute; top:5px; right:5px; width:45%;">';
				xCode.value = xCode.value + '<img src="' + document.getElementById('imgR').value + '" alt="' + document.getElementById('imgRalt').value + '"></img>';
                                xCode.value = xCode.value + '</div>  </div>  </div>  </slide>';
                }
                else if(document.getElementById('slideLayout').selectedIndex==7){
                                xCode.value = '<slide layout="TitleVerImgTxt">';
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
                                xCode.value = xCode.value + document.getElementById('title').value;
                                xCode.value = xCode.value + '<div style="position:relative; top:15; text-align:left; font-size:large">';
                                xCode.value = xCode.value + '<div style="position:absolute; top:5px; left:5px; width:45%;">';
				xCode.value = xCode.value + '<img src="' + document.getElementById('imgL').value + '" alt="' + document.getElementById('imgLalt').value + '"></img>';
                                xCode.value = xCode.value + '</div>';
                                xCode.value = xCode.value + '<div style="position:absolute; top:5px; right:5px; width:45%;">';
				xCode.value = xCode.value + '<ul>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line1').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line2').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line3').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line4').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line5').value + '</li>';
				xCode.value = xCode.value + '</ul>  </div>  </div>  </div>  </slide>';
                }
                else if(document.getElementById('slideLayout').selectedIndex==8){
                                xCode.value = '<slide layout="TitleHorTxtImg">';
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
                                xCode.value = xCode.value + document.getElementById('title').value;
                                xCode.value = xCode.value + '<div style="position:relative; top:5; text-align:left; font-size:large">';
                                xCode.value = xCode.value + '<div style="height:35%; width:90%;">';
				xCode.value = xCode.value + '<ul>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line1').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line2').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line3').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line4').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line5').value + '</li>';
				xCode.value = xCode.value + '</ul>';
		   	 	xCode.value = xCode.value + '</div>';
                                xCode.value = xCode.value + '<div style="height:35%; width:90%;">';
				xCode.value = xCode.value + '<img src="' + document.getElementById('imgB').value + '" alt="' + document.getElementById('imgBalt').value + '"></img>';
                                xCode.value = xCode.value + '</div>  </div>  </div>  </slide>';
                }
                else if(document.getElementById('slideLayout').selectedIndex==9){
                                xCode.value = '<slide layout="TitleHorImgTxt">';
                                xCode.value = xCode.value + '<div style="position:relative; top:25; text-align:center; font-size:xx-large; font-stretch:expanded">';
                                xCode.value = xCode.value + document.getElementById('title').value;
                                xCode.value = xCode.value + '<div style="position:relative; top:15; text-align:left; font-size:large">';
                                xCode.value = xCode.value + '<div style="height:35%; width:90%;">';
				xCode.value = xCode.value + '<img src="' + document.getElementById('imgT').value + '" alt="' + document.getElementById('imgTalt').value + '"></img>';
                                xCode.value = xCode.value + '</div>';
                                xCode.value = xCode.value + '<div style="height:35%; width:90%;">';
				xCode.value = xCode.value + '<ul>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line1').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line2').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line3').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line4').value + '</li>';
				xCode.value = xCode.value + '<li>' + document.getElementById('line5').value + '</li>';
				xCode.value = xCode.value + '</ul>  </div>  </div>  </div>  </slide>';
                }                
}
//end of function pptCoder()

//it generates PPT Code for current settings
function pptPreviewer(){
                pptCoder();
                document.getElementById('slidePreview').innerHTML = document.getElementById('slideCodeTxt').value;
}
//end of function pptCoder()

//sends XML node of parameter Text
function giveXMLTmp(textXML){
                try{ //Internet Explorer     
                                xmlTmp=new ActiveXObject("Microsoft.XMLDOM");
                                xmlTmp.async="false";
                                xmlTmp.loadXML(textXML);
                }
                catch(e){
                                try{ //Firefox, Mozilla, Opera, etc.
                                                parser=new DOMParser();
                                                xmlTmp=parser.parseFromString(textXML,"text/xml");
                                }
                                catch(e) {alert(e.message)}
                }
}
//end of function giveXML()

//getting htmlPart1 and htmlPart2 values
function getHTMLParts(){
	htmlPart1='<html><head><script type="text/javascript">function init(){var xmlDoc=null;if (window.ActiveXObject)';
	htmlPart1=htmlPart1+'{xmlDoc=new ActiveXObject("Microsoft.XMLDOM");}else if (document.implementation.createDocument)';
        htmlPart1=htmlPart1+'{xmlDoc=document.implementation.createDocument("","",null);}'
        htmlPart1=htmlPart1+'else{alert("Your browser cannot handle this script");}if (xmlDoc!=null){';
        htmlPart1=htmlPart1+'xmlDoc.async=false;xmlDoc.load("PPT.xml");	var varCue=document.getElementById("slideCue");';
        htmlPart1=htmlPart1+'varCue.innerHTML = "[Navigate: ";	var x=xmlDoc.getElementsByTagName("slide");';
        htmlPart1=htmlPart1+'document.getElementById("slideShow").innerHTML = "<div style=\'text-align:center;\'>This Slide has " + x.length + " slides,<br/> that can be viewed clicking on respective buttons above.</div>";';
        htmlPart1=htmlPart1+'for (i=0;i<x.length;i++){varCue.innerHTML = varCue.innerHTML + "<input type=\'button\' value=\'" + parseInt(i+1) + "\' onclick=\'xmlF(" + i + ");\'>";';
	htmlPart1=htmlPart1+'}varCue.innerHTML = varCue.innerHTML + " ]";}}';
        htmlPart1=htmlPart1+'function xmlF(slideNum){var xmlDoc=null;if (window.ActiveXObject){	xmlDoc=new ActiveXObject("Microsoft.XMLDOM");';
        htmlPart1=htmlPart1+'xmlDoc.async=false;xmlDoc.load("PPT.xml");	var x=xmlDoc.getElementsByTagName("slide");';
        htmlPart1=htmlPart1+'for (i=0;i<x.length;i++){ if(i==slideNum) document.getElementById("slideShow").innerHTML = x[i].xml;';
        htmlPart1=htmlPart1+'}}else if (document.implementation.createDocument)	{xmlDoc=document.implementation.createDocument("","",null);';
        htmlPart1=htmlPart1+'xmlDoc.async=false;xmlDoc.load("PPT.xml");	var x=xmlDoc.getElementsByTagName("slide");';
        htmlPart1=htmlPart1+'for (i=0;i<x.length;i++){	if(i==slideNum){ showChild=document.getElementById("slideShow").childNodes;';
        htmlPart1=htmlPart1+'for (j=0;j<showChild.length;j++)document.getElementById("slideShow").removeChild(showChild[j]);';
        htmlPart1=htmlPart1+'document.getElementById("slideShow").appendChild(x[i]);document.getElementById("slideShow").innerHTML=document.getElementById("slideShow").innerHTML;';
        htmlPart1=htmlPart1+'}}} else{	alert(\'Your browser cannot handle this script\');}}</script>';
        htmlPart1=htmlPart1+'</head><body onload="init();xmlF(1);"><div id="slideCue">this is for PowerPresenter Navigation Control</div>';
        htmlPart1=htmlPart1+'<div id="slideShow">this is for PowerPresenter Slide Show</div></body></html> ';
}
//end of function getHTMLParts()

//changing XML PPT Source File Name in Viewer Source
function changeXMLFileName(){
                newNameXML = prompt("Enter the name you saved your xmlPPT files with: ","PPT.xml")
                //txtS.replace("PPT.xml",newNameXML);
                var txtS = document.getElementById('sPresenter').value;
                document.getElementById('sPresenter').value = txtS.replace("PPT.xml",newNameXML);
                var txtS = document.getElementById('sPresenter').value;
                document.getElementById('sPresenter').value = txtS.replace("PPT.xml",newNameXML);
                var txtS = document.getElementById('sPresenter').value;
                document.getElementById('sPresenter').value = txtS.replace("PPT.xml",newNameXML);
}
//end of function changeXMLFileName()
