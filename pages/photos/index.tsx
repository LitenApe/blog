import Image from 'next/image';
import Image1 from '../../content/photos/DSCF3895.jpg';
import Image2 from '../../content/photos/DSCF3992.jpg';
import Image3 from '../../content/photos/DSCF4145.jpg';
import Image4 from '../../content/photos/DSCF4195.jpg';
import { Page } from '../../components/Page';

export default function Photos(): JSX.Element {
  const images = [Image1, Image2, Image3, Image4].sort((a, b) =>
    b.src.localeCompare(a.src)
  );

  return (
    <Page title="Photo portfolio">
      {images.map((image) => (
        <Image key={image.src} src={image} placeholder="blur" />
      ))}
    </Page>
  );
}
