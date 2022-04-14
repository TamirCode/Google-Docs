import Quill from "quill"
import "quill/dist/quill.snow.css"
import { useCallback } from "react"

export default function TextEditor() {

	const TextEditorRef = useCallback(TextEditor => {
		if (TextEditor == null) return

		TextEditor.innerHTML = ""
		const editor = document.createElement("div")
		TextEditor.append(editor)
		new Quill(editor, { theme: "snow" })
	//e
	}, [])
	
	return (
		<div className="TextEditor" ref={TextEditorRef}>
			
		</div>
	)
}
