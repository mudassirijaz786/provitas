import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { SectionProps } from "../../utils/SectionProps"
import Button from "../elements/Button"
import ButtonGroup from "../elements/ButtonGroup"

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
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">
              Provitas® LLC manufactures Vitamins A, D, E, Mixed Tocopherols and
              K in the form of powders, oils and emulsions. Download our digital
              brochure.
            </h3>
          </div>
          <div className="cta-action">
            <div className="reveal-from-bottom" data-reveal-delay="600">
              <ButtonGroup>
                <Button
                  tag="a"
                  color="dark"
                  wideMobile
                  href="https://github.com/mudassirijaz786/"
                >
                  Download
                </Button>
              </ButtonGroup>
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
