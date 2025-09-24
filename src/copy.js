function copy_(code_value, copy_btn) {
	  navigator.clipboard.writeText(code_value);
	  copy_btn.innerText = "Copied!";
	  copy_btn.disabled = true;
	  setTimeout(()=>{
		  copy_btn.disabled = false;
		  copy_btn.innerText = "Copy";
	  },2500);
}
export default copy_;
