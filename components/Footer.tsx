export default function TopBar() {
  return (
    <>
      <div className="footer">
        <div className="cta">
          <div className="cta-card">
            <div className="content">
              <div className="sub-head">sub headline</div>
              <div className="main-head">main headline</div>
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="media">
              <img
                src="https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          <div className="cta-card">
            <div className="content">
              <div className="sub-head">sub headline</div>
              <div className="main-head">main headline</div>
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="media">
              <img
                src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bottom-nav"></div>
        <div className="bottom-bar"></div>
      </div>
    </>
  );
}
