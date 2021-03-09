import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { SectionProps } from "../../utils/SectionProps"
import Button from "../elements/Button"
import ButtonGroup from "../elements/ButtonGroup"
import Image from "../elements/Image"

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  invertMobile,
  invertDesktop,
  alignTop,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className,
  )

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split",
  )

  return (
    <section {...props} className={outerClasses}>
      <div className="container" style={{ marginTop: 15 }}>
        <div className={innerClasses}>
          <div className="cta-slogan">
            <div data-reveal-container=".split-item">
              <Image
                src="https://www.provitas.com/wp-content/uploads/2020/03/supply-side-east-1024x291.jpg"
                alt="Features split 01"
                width={1024}
                height={291}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Cta.propTypes = propTypes
Cta.defaultProps = defaultProps

export default Cta
