import React from "react";

export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return <div>
      <div className="bg-grey-1 pv4">
        <div className="flex-l mhn1-l ph3 center mw7">
          <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "header"])}</h2>
        </div>
      </div>

      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <div className="flex-ns mhn2-ns mb3">
            {(entry.getIn(["data", "projects"]) || []).map((project, i) => <div className="ph2-ns w-50-ns" key={i}>
              <img src={getAsset(project.get("image"))} alt="" className="center db mb3" style={{width: "240px"}}/>
              <h3>{project.get("title")}</h3>
              <p>{project.get("subtitle")}</p>
            </div>)}
          </div>
        </div>
      </div>

    </div>;
  }
}
