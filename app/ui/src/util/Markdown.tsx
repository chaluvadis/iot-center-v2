import React, {FunctionComponent, ElementType} from 'react'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

interface Props {
  source: string
}
const renderers: {[nodeType: string]: ElementType} = {
  code: ({language, value}) => {
    return <SyntaxHighlighter language={language} children={value} />
  },
}

const Markdown: FunctionComponent<Props> = ({source}) => {
  return <ReactMarkdown source={source} renderers={renderers} />
}

export default Markdown
