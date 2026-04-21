const info = {
  ec2: {
    title: "EC2 — Run Applications",
    desc: "EC2 provides virtual servers (instances) to run apps, APIs, websites, and workloads."
  },
  s3: {
    title: "S3 — Store Files",
    desc: "S3 is object storage for files, backups, images, logs, static websites, and data lakes."
  },
  iam: {
    title: "IAM — Manage Access",
    desc: "IAM controls who can access AWS resources with users, roles, and policies."
  },
  rds: {
    title: "RDS — Managed Databases",
    desc: "RDS provides managed SQL databases with backups, scaling, and maintenance."
  },
  lambda: {
    title: "Lambda — Serverless Functions",
    desc: "Lambda runs code without servers. Pay only per execution."
  },
  cloudwatch: {
    title: "CloudWatch — Monitoring",
    desc: "CloudWatch collects logs, metrics, alarms, and dashboards."
  },
  vpc: {
    title: "VPC — Private Network",
    desc: "VPC lets you design your own cloud network with subnets, routing, and firewalls."
  }
};

document.querySelectorAll(".mac-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.service;
    document.getElementById("serviceTitle").textContent = info[key].title;
    document.getElementById("serviceDesc").textContent = info[key].desc;
  });
});
