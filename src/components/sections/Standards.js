import React from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import Image from "../elements/Image"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className,
  )

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
  )

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left")

  const sectionHeader = {
    title: "Certifications & Standards",
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="" />
          <div className={tilesClasses}>
            <div className=" tiles-item" data-reveal-delay="200">
              <div className="">
                <div className="">
                  <Image
                    src="https://www.provitas.com/wp-content/uploads/2018/07/halal-small.svg"
                    alt="Open"
                    width={90}
                    height={80}
                  />
                </div>
                <div className="testimonial-item-footer text-xs ">
                  <span className="text-color-low"> Halal certified </span>
                </div>
              </div>
            </div>

            <div className="tiles-item " data-reveal-delay="200">
              <div className="">
                <div className="">
                  <Image
                    src="https://www.provitas.com/wp-content/uploads/2018/07/kosher-small.svg"
                    alt="Open"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="testimonial-item-footer text-xs ">
                  <span className="text-color-low"> Kosher Certified</span>
                </div>
              </div>
            </div>

            <div className=" " data-reveal-delay="200">
              <div className="">
                <div className="">
                  <Image
                    src="https://www.provitas.com/wp-content/uploads/2018/07/organic-small.svg"
                    alt="Open"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="testimonial-item-footer text-xs ">
                  <span className="text-color-low"> Non-GMO</span>
                </div>
              </div>
            </div>
          </div>
          <div className={tilesClasses}>
            <div className=" tiles-item" data-reveal-delay="200">
              <div className="">
                <div className="">
                  <Image
                    src="https://www.provitas.com/wp-content/uploads/2018/07/sidi-small.svg"
                    alt="Open"
                    width={90}
                    height={80}
                  />
                </div>
                <div className="testimonial-item-footer text-xs ">
                  <span className="text-color-low">Sidi Documentation</span>
                </div>
              </div>
            </div>

            <div className="tiles-item " data-reveal-delay="200">
              <div className="">
                <div className="">
                  <Image
                    src="https://www.provitas.com/wp-content/uploads/2018/07/fsma-small.svg"
                    alt="Open"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="testimonial-item-footer text-xs ">
                  <span className="text-color-low"> FSMA Compliant</span>
                </div>
              </div>
            </div>

            <div className=" " data-reveal-delay="200">
              <div className="">
                <div className="">
                  <Image
                    src="https://www.provitas.com/wp-content/uploads/2018/07/sqf-small.svg"
                    alt="Open"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="testimonial-item-footer text-xs ">
                  <span className="text-color-low"> SQF Certified</span>
                </div>
              </div>
            </div>
          </div>

          <div className={tilesClasses}>
            <div className=" tiles-item" data-reveal-delay="200">
              <div className="">
                <div className="">
                  <Image
                    src="https://www.provitas.com/wp-content/uploads/2018/07/custom-formulas-small.svg"
                    alt="Open"
                    width={90}
                    height={80}
                  />
                </div>
                <div className="testimonial-item-footer text-xs ">
                  <span className="text-color-low">Custom Formulas</span>
                </div>
              </div>
            </div>

            <div className="tiles-item " data-reveal-delay="200">
              <div className="">
                <div className="">
                  <Image
                    src="https://www.provitas.com/wp-content/uploads/2018/07/usp-small-1.svg"
                    alt="Open"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="testimonial-item-footer text-xs ">
                  <span className="text-color-low"> Organic Compliant</span>
                </div>
              </div>
            </div>

            <div className=" " data-reveal-delay="200">
              <div className="">
                <div className="">
                  <Image
                    src="https://www.provitas.com/wp-content/uploads/2018/07/organic-small.svg"
                    alt="Open"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="testimonial-item-footer text-xs ">
                  <span className="text-color-low"> USP Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Testimonial.propTypes = propTypes
Testimonial.defaultProps = defaultProps

export default Testimonial
