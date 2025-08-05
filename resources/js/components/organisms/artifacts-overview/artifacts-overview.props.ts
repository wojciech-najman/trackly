export interface OverviewArtifact {
  name: string;
  text: string;
  href: string;
  icon: any;
}

export interface ArtifactsOverviewProps {
  artifacts: OverviewArtifact[];
}
