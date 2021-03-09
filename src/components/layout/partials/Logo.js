import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import Image from "../../elements/Image"

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className)

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image
            src="https://www.provitas.com/wp-content/uploads/2019/03/cropped-Screen-Shot-2018-06-20-at-10.22.jpg"
            alt="Open"
            width={240}
            height={46}
          />
        </Link>
      </h1>
    </div>
  )
}

export default Logo
