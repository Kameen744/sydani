<template>
  <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">
      <SectionTitle :title="`${$page.props.page} Insight`"></SectionTitle>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 mb-xl-0">
          <div class="sub-insight">
            <a
              href="insights/case-studies/dynamics-365-business-central-implementation-integration-services-help-biopharmaceutical-company-standardize-processes-and-ensure-compliance/index.html"
            >
              <img
                :src="`${$page.props.asset}/assets/img/thumb1.jpg`"
                class="img-fluid w-100"
              />
            </a>
            <div class="sub-insight-content">
              <a
                href="insights/case-studies/dynamics-365-business-central-implementation-integration-services-help-biopharmaceutical-company-standardize-processes-and-ensure-compliance/index.html"
                target="_blank"
              >
                <h6>
                  Dynamics 365 Business Central Implementation and Integration
                  Services Help a Biopharmaceutical Company Standardize
                  Processes, Improve Financial Reporting, and Ensure Compliance
                </h6>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 mb-xl-0">
          <div class="sub-insight">
            <a href="#">
              <img
                :src="`${$page.props.asset}/assets/img/thumb2.jpg`"
                class="img-fluid w-100"
              />
            </a>
            <div class="sub-insight-content">
              <a href="#" target="_blank">
                <h6>
                  Comprehensive Suite of IT Services Helps a Value-based Women’s
                  Healthcare Partner Improve Infrastructure Availability,
                  Performance, and Security
                </h6>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 mb-xl-0">
          <div class="sub-insight">
            <a
              href="insights/case-studies/application-development-and-product-engineering-services-enable-a-logistics-firm-to-build-automation/index.html"
            >
              <img
                :src="`${$page.props.asset}/assets/img/thumb1.jpg`"
                class="img-fluid w-100"
              />
            </a>
            <div class="sub-insight-content">
              <a
                href="insights/case-studies/application-development-and-product-engineering-services-enable-a-logistics-firm-to-build-automation/index.html"
                target="_blank"
              >
                <h6>
                  Application Development and Product Engineering Services
                  Enable a Logistics Brokerage Firm to Consolidate Processes and
                  Build Automation
                </h6>
              </a>
            </div>
          </div>
        </div>

        <!-- <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4 mb-xl-0">
          <div class="sub-insight">
            <a
              href="insights/case-studies/cost-optimization-services-help-a-global-media-and-entertainment-company-control-costs-on-aws-amid-the-pandemic/index.html"
            >
              <img
                :src="`${$page.props.asset}/assets/img/thumb2.jpg`"
                class="img-fluid w-100"
              />
            </a>
            <div class="sub-insight-content">
              <a
                href="insights/case-studies/cost-optimization-services-help-a-global-media-and-entertainment-company-control-costs-on-aws-amid-the-pandemic/index.html"
                target="_blank"
              >
                <h6>
                  Cost Optimization Services Help a Global Media and
                  Entertainment Company Control Costs on AWS Amid the Pandemic
                </h6>
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "./../Components/SectionTitle.vue";
</script>

<style scoped>
.sub-insight img {
  transition: 250ms ease-out;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
.sub-insight {
  overflow: hidden;
  transition: 250ms ease-out;
  cursor: pointer;
}

a {
  color: rgb(240, 238, 237);
  text-decoration: none;
  background-color: transparent;
  transition: 500ms ease-out;
}
.sub-insight {
  position: relative;
}
.sub-insight .sub-insight-content {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(43, 48, 58, 0.9);
  color: #fff;
  padding: 15px 15px 10px;
  min-height: 100px;
  transition: 500ms ease-out;
}

.sub-insight-content:hover {
  background-color: rgb(251, 146, 60);
  color: #fff;
}

.sub-insight:hover {
  transform: scale(1.1);
  z-index: 99;
  transition: 250ms ease-out;
}
</style>
