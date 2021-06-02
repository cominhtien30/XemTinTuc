import React, { useContext } from "react";
import { UserContext } from "./home";
import { Grid, Segment, Placeholder } from "semantic-ui-react";

const PlaceholderLoad = (props) => {
  const { data, dataProduct } = useContext(UserContext);
  const lengthTab2 = data.length - 1;
  const dataP = dataProduct.dataProduct;
  const viewPlaceholde = () => {
    switch (props.index) {
      case 0:
        return Array(data.length)
          .fill(0)
          .map((item, index) => {
            return (
              <Grid.Row
                reversed={index % 2 && "mobile computer"}
                columns="equal"
              >
                <Grid.Column>
                  <Placeholder style={{ height: 120 }}>
                    <Placeholder.Image />
                  </Placeholder>
                </Grid.Column>
                <Grid.Column>
                  <Placeholder>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder>
                </Grid.Column>
              </Grid.Row>
            );
          });
      case 1:
        return (
          <>
            <Grid.Row>
              <Grid.Column width={16}>
                <Placeholder style={{ height: 120 }}>
                  <Placeholder.Image />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
            {Array(lengthTab2)
              .fill(0)
              .map((item, index) => {
                return (
                  <Grid.Row>
                    <Grid.Column>
                      <Placeholder style={{ height: 70 }}>
                        <Placeholder.Image />
                      </Placeholder>
                    </Grid.Column>
                    <Grid.Column>
                      <Placeholder>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                      </Placeholder>
                    </Grid.Column>
                  </Grid.Row>
                );
              })}
          </>
        );
      case 2:
        const soChan = (data.length - 1) % 2 === 0 ? true : false;
        const lengthTab3 = soChan ? data.length - 1 : data.length - 2;
        return (
          <>
            <Grid.Row>
              <Grid.Column width={16}>
                <Placeholder style={{ height: 120 }}>
                  <Placeholder.Image />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {Array(lengthTab3)
                .fill(0)
                .map((item, index) => {
                  return (
                    <>
                      <Grid.Column width={8} style={{ margin: "5px 0" }}>
                        <Placeholder>
                          <Placeholder.Image />
                        </Placeholder>
                        <Placeholder>
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder>
                      </Grid.Column>
                    </>
                  );
                })}
            </Grid.Row>
            {!soChan && (
              <Grid.Row>
                <Grid.Column width={16}>
                  <Placeholder style={{ height: 120 }}>
                    <Placeholder.Image />
                  </Placeholder>
                </Grid.Column>
              </Grid.Row>
            )}
          </>
        );
      case 3:
        return (
          <>
            <div
              style={{
                maxWidth: `${100 * data.length}%`,
                display: "flex",
                flexDirection: "row"
              }}
            >
              {Array(data.length)
                .fill(0)
                .map((ite, index) => {
                  return (
                    <Grid.Column style={{ margin: "5px 6px", width: "150px" }}>
                      <Placeholder>
                        <Placeholder.Image style={{ height: "150px" }} />
                      </Placeholder>
                      <Placeholder>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                      </Placeholder>
                    </Grid.Column>
                  );
                })}
            </div>
          </>
        );
      case 4:
        return (
          <>
            <Grid.Row>
              <Grid.Column width={16}>
                <Placeholder style={{ height: 120 }}>
                  <Placeholder.Image />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
            {Array(dataP.length)
              .fill(0)
              .map((item, index) => {
                return (
                  <Grid.Row>
                    <Grid.Column>
                      <Placeholder style={{ height: 70 }}>
                        <Placeholder.Image />
                      </Placeholder>
                    </Grid.Column>
                    <Grid.Column>
                      <Placeholder>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                      </Placeholder>
                    </Grid.Column>
                  </Grid.Row>
                );
              })}
          </>
        );
      case 5:
        const dataProduct2 = () =>
          dataP.reduce(
            (acc, e, i) => (
              i % 4 ? acc[acc.length - 1].push(e) : acc.push([e]), acc
            ),
            []
          );

        return (
          <>
            <Grid.Row>
              <Grid.Column width={16}>
                <Placeholder style={{ height: 120 }}>
                  <Placeholder.Image />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
            {dataProduct2().map((item, index) => {
              return (
                <Grid.Row columns={2} key={index}>
                  <Grid.Column width={7}>
                    <Placeholder>
                      <Placeholder.Image style={{ height: "100px" }} />
                    </Placeholder>
                    <Placeholder style={{ marginTop: "0" }}>
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </Grid.Column>
                  <Grid.Column width={9}>
                    {Array(3)
                      .fill(0)
                      .map((i, index) => {
                        return (
                          <Grid.Row columns={2} style={{ margin: "2px 0" }}>
                            <Grid.Column
                              style={{ width: "100%", height: "100%" }}
                            >
                              <Placeholder>
                                <Placeholder.Image style={{ height: "55px" }} />
                              </Placeholder>
                            </Grid.Column>
                            <Grid.Column
                              style={{ width: "100%", margin: "0 2px" }}
                            >
                              <Placeholder>
                                <Placeholder.Line />
                                <Placeholder.Line />
                              </Placeholder>
                            </Grid.Column>
                          </Grid.Row>
                        );
                      })}
                  </Grid.Column>
                </Grid.Row>
              );
            })}
          </>
        );
      default:
        return (
          <>
            <Grid.Row>
              <Grid.Column width={16}>
                <Placeholder style={{ height: 120 }}>
                  <Placeholder.Image />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column width={7}>
                <Placeholder>
                  <Placeholder.Image style={{ height: "100px" }} />
                </Placeholder>
                <Placeholder style={{ marginTop: "0" }}>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>
              </Grid.Column>
              <Grid.Column width={9}>
                <Grid.Row columns={2} style={{ margin: "2px 0" }}>
                  <Grid.Column style={{ width: "100%", height: "100%" }}>
                    <Placeholder>
                      <Placeholder.Image style={{ height: "55px" }} />
                    </Placeholder>
                  </Grid.Column>
                  <Grid.Column style={{ width: "100%", margin: "0 2px" }}>
                    <Placeholder>
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} style={{ margin: "2px 0" }}>
                  <Grid.Column style={{ width: "100%", height: "100%" }}>
                    <Placeholder>
                      <Placeholder.Image style={{ height: "55px" }} />
                    </Placeholder>
                  </Grid.Column>
                  <Grid.Column style={{ width: "100%", margin: "0 2px" }}>
                    <Placeholder>
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} style={{ margin: "2px 0" }}>
                  <Grid.Column style={{ width: "100%", height: "100%" }}>
                    <Placeholder>
                      <Placeholder.Image style={{ height: "55px" }} />
                    </Placeholder>
                  </Grid.Column>
                  <Grid.Column style={{ width: "100%", margin: "0 2px" }}>
                    <Placeholder>
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </>
        );
    }
  };

  return (
    <div
      style={{
        overflowY: "auto",
        maxHeight: "460px",
        width: "100%"
      }}
    >
      <Segment raised>
        <Grid columns="equal">{viewPlaceholde()}</Grid>
      </Segment>
    </div>
  );
};
export default PlaceholderLoad;
