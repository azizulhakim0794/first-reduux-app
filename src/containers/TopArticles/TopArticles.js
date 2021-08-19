import React from 'react'
import FlipMove from 'react-flip-move';
const TopArticles = () => {
    return (
        <FlipMove className="flip-wrapper" style={{ color: 'red' }}>
  <div key="a">Hello</div>
  <div key="b">World</div>
</FlipMove>
    )

}
export default TopArticles