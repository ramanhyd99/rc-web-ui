### Script to release to Amazon LightSail ###

# Builds the UI code (building it locally because the docker image build fails, need to fix)
#sudo docker build -t rc-ui .

# Builds Docker image 
docker build -t rc-ui . 

# Tags the built image to latest
docker tag rc-ui:latest 967508962625.dkr.ecr.ap-south-1.amazonaws.com/rc-ui:latest

# Pushes to ECR with latest tag 
docker push 967508962625.dkr.ecr.ap-south-1.amazonaws.com/rc-ui:latest 


