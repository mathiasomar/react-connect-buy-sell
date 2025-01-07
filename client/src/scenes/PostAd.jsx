import Container from "../components/Container";
import PageHeader from "../components/pageHeader";
import Section from "../components/section";

const PostAd = () => {
  return (
    <Section className="min-h-screen">
      <Container>
        <PageHeader page="Post Ads" />
      </Container>

      <Container>
        <form action="">
          <div className="mt-3 mb-2"></div>

          <div className="grid grid-cols-12 gap-4">
            <div className="lg:col-span-8">
              <div>
                <div className="p-[24px] box-shadow1">
                  <label htmlFor="">
                    Item Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Item name"
                  />
                </div>

                <div className="p-[24px] box-shadow1 mt-4">
                  <h3 className="text-sm inline-block leading-[20px] capitalize font-semibold">
                    About Item
                  </h3>
                  <div>
                    <div className="grid grid-cols-12 gap-3 mt-3">
                      <div className="sm:col-span-4">
                        <div>
                          <label htmlFor="">
                            Item Category <span className="text-red-500">*</span>
                          </label>
                          <select name="" id="" className="input-field">
                            <option selected disabled>Select Category</option>
                            <option value="1">Car & Vehicles</option>
                            <option value="2">Electronics</option>
                            <option value="3">Home & Livings</option>
                            <option value="4">Fashion</option>
                            <option value="5">Sports</option>
                            <option value="6">Pet’s & Animals</option>
                            <option value="7">Appliances</option>
                            <option value="8">Education</option>
                            <option value="9">Mobile Phones</option>
                          </select>
                        </div>
                      </div>
                      <div className="sm:col-span-4">
                        <div>
                          <label htmlFor="">
                            Sub Category <span className="text-red-500">*</span>
                          </label>
                          <select name="" id="" className="input-field">
                            <option selected disabled>Select Sub Category</option>
                          </select>
                        </div>
                      </div>
                      <div className="sm:col-span-4">
                        <div>
                          <label htmlFor="">
                            Child Category <span className="text-red-500">*</span>
                          </label>
                          <select name="" id="" className="input-field">
                            <option selected disabled>Select Child Category</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 mt-3">
                        <div className="sm:col-span-6">
                            <div className="input-box mb-3">
                                <input type="checkbox" name="" id="item-condition" className="mr-1" />
                                <label htmlFor="item-condition">This item has Condition</label>
                            </div>
                        </div>
                        <div className="sm:col-span-6"></div>
                    </div>
                    <div className="grid grid-cols-12 mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4"></div>
          </div>
        </form>
      </Container>
    </Section>
  );
};

export default PostAd;
