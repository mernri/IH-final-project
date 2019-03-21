import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/700x500",
    caption: "Photo by Thomas Kelley",
    orientation: "square",
    useForDemo: true
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/400x200",
    caption: "Photo by Teddy Kelley",
    orientation: "landscape",
    useForDemo: true
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/300x400",
    caption: "Photo by Jay Ruzesky",
    orientation: "landscape",
    useForDemo: true
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/300x400",
    caption: "Photo by Jay Ruzesky",
    orientation: "landscape",
    useForDemo: true
  }
];

class AdViewPictures extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
  }
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  gotoImage = index => {
    this.setState({
      currentImage: index
    });
  };
  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  };


  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default AdViewPictures;
