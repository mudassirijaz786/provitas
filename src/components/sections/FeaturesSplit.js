import React from "react"
import classNames from "classnames"
import { SectionSplitProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import Image from "../elements/Image"
import Button from "../elements/Button"

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider,
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className,
  )

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider,
    bottomDivider && "has-bottom-divider",
  )

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top",
  )

  const sectionHeader = {
    title: "Workflow that just works",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  Provitas® manufactures Vitamins A, D, E, Mixed Tocopherols and
                  K powders, oils and emulsions.
                </h3>

                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="https://cruip.com/"
                >
                  View Products
                </Button>
              </div>

              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-left",
                  imageFill && "split-item-image-fill",
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://www.provitas.com/wp-content/uploads/2019/06/HeroGraphic-1-min.gif"
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>

          <h2 style={{ color: "black" }}>Whats New</h2>

          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Vitamin K2</h3>
                <p className="mt-0 mb-12">
                  K2 is a vitally important nutrient for overall health. K2 is
                  linked to heart health by reducing coronary calcification.
                  Additionally, studies suggest that vitamin K2 is associated
                  with bone health by preventing osteoporosis and fractures.
                  Vitamin K2 has been effective in reducing skin wrinkles and
                  has shown anti-aging effects. Vitamin K2 is intended for use
                  in the fortification of dietary supplements, foods and
                  personal care products. Provitas is manufacturing K2 as MK-7,
                  its most bio available form, in industry standard and custom
                  potency powders and oils.
                </p>

                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="https://cruip.com/"
                >
                  View Page
                </Button>
              </div>

              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-left",
                  imageFill && "split-item-image-fill",
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://www.provitas.com/wp-content/uploads/2019/09/Icons-01.png"
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesSplit.propTypes = propTypes
FeaturesSplit.defaultProps = defaultProps

export default FeaturesSplit
