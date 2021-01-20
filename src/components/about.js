import React from 'react'
import Typography from '@material-ui/core/Typography'
import '../App.css'

export default function About () {
  return (
    <div>
      <Typography
        variant="h3"
      >
        About
      </Typography>
      <hr />
      <Typography>
        {'This tool is built with the aim of helping in the hunt for \
          open directories. Inspired partly by '}
        <a
          className="text-link"
          href="https://www.reddit.com/r/opendirectories/"
          target="_blank"
          rel="noopener noreferrer"
        >r/opendirectories
        </a>
        {', it provides a way of using a search term and file extension filters \
          provided by search engines to uncover them. According to the \
          subreddit, open directories are \'unprotected directories of pics, \
          vids, music, software and otherwise interesting files.\''}
      </Typography>
      <hr />
      <Typography
        align="center"
      >
        Made by <a
          className="text-link"
          href="https://www.reecemercer.dev"
          target="_blank"
          rel="noopener noreferrer"
        >Reece Mercer
        </a>
        {' '} | Find me on <a
          className="text-link"
          href="https://www.github.com/Reeceeboii"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub
        </a>
      </Typography>
    </div>
  )
}
